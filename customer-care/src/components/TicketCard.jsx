import { useState } from 'react';
import { MessageSquare, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Box, Typography, Chip, Button, Collapse, Stack, Divider, Paper } from '@mui/material';

const TicketCard = ({ ticket }) => {
  const [expanded, setExpanded] = useState(false);

  const getStatusColor = (status) => {
    if (status === 'Open') return 'warning';
    if (status === 'In Progress') return 'info';
    return 'success';
  };

  return (
    <Paper elevation={2} sx={{ mb: 2, borderRadius: 2 }}>
      <Box
        sx={{ p: 2, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: expanded ? 'grey.100' : 'background.paper' }}
        onClick={() => setExpanded(!expanded)}
      >
        <Box>
          <Typography variant="h6">{ticket.title}</Typography>
          <Stack direction="row" spacing={2} alignItems="center" mt={1}>
            <Chip label={ticket.status} color={getStatusColor(ticket.status)} size="small" />
            <Typography variant="body2" color="text.secondary">{ticket.customerId}</Typography>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Clock size={16} />
              <Typography variant="body2" color="text.secondary">
                {ticket.timeSpent || 'Not started'}
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box>
          {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </Box>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <Box sx={{ p: 2, bgcolor: 'grey.50' }}>
          <Typography mb={2}>{ticket.description}</Typography>
          <Box mb={2}>
            <Typography variant="subtitle1" mb={1} sx={{ display: 'flex', alignItems: 'center' }}>
              <MessageSquare size={18} style={{ marginRight: 8 }} />
              Comments ({ticket.comments?.length || 0})
            </Typography>
            {ticket.comments?.length > 0 ? (
              <Stack spacing={2}>
                {ticket.comments.map(comment => (
                  <Paper key={comment.id} sx={{ pl: 2, py: 1, borderLeft: 3, borderColor: 'primary.light' }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                      <Typography variant="body2" fontWeight={600}>{comment.author}</Typography>
                      <Typography variant="caption" color="text.secondary">{new Date(comment.createdAt).toLocaleString()}</Typography>
                    </Stack>
                    <Typography variant="body2" mt={1}>{comment.text}</Typography>
                  </Paper>
                ))}
              </Stack>
            ) : (
              <Typography variant="body2" color="text.secondary">No comments yet</Typography>
            )}
          </Box>
        </Box>
      </Collapse>
    </Paper>
  );
};

export default TicketCard;